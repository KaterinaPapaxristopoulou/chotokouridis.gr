"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import styles from "@/components/projects/ProjectsIndex.module.css";

export type ProjectsIndexProject = {
  title: string;
  slug: string;
  category: string;
  location: string;
  year: string;
  status: string;
  image: string;
};

type ProjectsIndexProps = {
  projects: ProjectsIndexProject[];
};

export function ProjectsIndex({ projects }: ProjectsIndexProps) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [blockRange, setBlockRange] = useState({
    maxColumn: 2,
    maxRow: 2,
    minColumn: 0,
    minRow: 0,
  });
  const galleryViewportRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({
    didDrag: false,
    pointerId: -1,
    scrollLeft: 0,
    scrollTop: 0,
    startX: 0,
    startY: 0,
  });

  const activeProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) ?? projects[0],
    [activeSlug, projects],
  );
  const galleryTiles = useMemo(
    () => {
      const tiles = [];

      for (let blockRow = blockRange.minRow; blockRow <= blockRange.maxRow; blockRow += 1) {
        for (
          let blockColumn = blockRange.minColumn;
          blockColumn <= blockRange.maxColumn;
          blockColumn += 1
        ) {
          for (const [projectIndex, project] of projects.entries()) {
            tiles.push({
              blockColumn,
              blockRow,
              project,
              projectColumn: projectIndex % 3,
              projectRow: Math.floor(projectIndex / 3),
            });
          }
        }
      }

      return tiles;
    },
    [blockRange, projects],
  );

  useEffect(() => {
    const viewport = galleryViewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollTo({
      left: (viewport.scrollWidth - viewport.clientWidth) / 2,
      top: (viewport.scrollHeight - viewport.clientHeight) / 2,
    });
  }, []);

  function getBlockSize() {
    const viewport = galleryViewportRef.current;
    const tile = viewport?.querySelector<HTMLElement>("[data-project-tile]");

    if (!viewport || !tile) {
      return null;
    }

    const grid = viewport.querySelector<HTMLElement>("[data-project-grid]");

    if (!grid) {
      return null;
    }

    const gridStyles = window.getComputedStyle(grid);
    const gap = Number.parseFloat(gridStyles.columnGap) || 0;
    const blockWidth = tile.offsetWidth * 3 + gap * 2;
    const blockHeight = tile.offsetHeight * 2 + gap;

    return { blockHeight, blockWidth };
  }

  function growGalleryIfNeeded() {
    const viewport = galleryViewportRef.current;
    const blockSize = getBlockSize();

    if (!viewport || !blockSize) {
      return;
    }

    const edgeBuffer = 0.85;
    const nearLeft = viewport.scrollLeft < blockSize.blockWidth * edgeBuffer;
    const nearRight =
      viewport.scrollLeft >
      viewport.scrollWidth - viewport.clientWidth - blockSize.blockWidth * edgeBuffer;
    const nearTop = viewport.scrollTop < blockSize.blockHeight * edgeBuffer;
    const nearBottom =
      viewport.scrollTop >
      viewport.scrollHeight - viewport.clientHeight - blockSize.blockHeight * edgeBuffer;

    if (!nearLeft && !nearRight && !nearTop && !nearBottom) {
      return;
    }

    flushSync(() => {
      setBlockRange((current) => ({
        maxColumn: nearRight ? current.maxColumn + 1 : current.maxColumn,
        maxRow: nearBottom ? current.maxRow + 1 : current.maxRow,
        minColumn: nearLeft ? current.minColumn - 1 : current.minColumn,
        minRow: nearTop ? current.minRow - 1 : current.minRow,
      }));
    });

    if (nearLeft) {
      viewport.scrollLeft += blockSize.blockWidth;
      dragState.current.scrollLeft += blockSize.blockWidth;
    }

    if (nearTop) {
      viewport.scrollTop += blockSize.blockHeight;
      dragState.current.scrollTop += blockSize.blockHeight;
    }
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const viewport = galleryViewportRef.current;

    if (!viewport) {
      return;
    }

    dragState.current = {
      didDrag: false,
      pointerId: event.pointerId,
      scrollLeft: viewport.scrollLeft,
      scrollTop: viewport.scrollTop,
      startX: event.clientX,
      startY: event.clientY,
    };

    viewport.setPointerCapture(event.pointerId);
    setIsDragging(true);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const viewport = galleryViewportRef.current;
    const state = dragState.current;

    if (!viewport || state.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - state.startX;
    const deltaY = event.clientY - state.startY;

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      state.didDrag = true;
    }

    viewport.scrollLeft = state.scrollLeft - deltaX;
    viewport.scrollTop = state.scrollTop - deltaY;
    growGalleryIfNeeded();
  }

  function handlePointerEnd(event: React.PointerEvent<HTMLDivElement>) {
    const viewport = galleryViewportRef.current;

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    dragState.current.pointerId = -1;
    setIsDragging(false);
  }

  if (!activeProject) {
    return (
      <section className={styles.empty}>
        <p className="eyebrow">Projects Index</p>
        <h1>Projects are being prepared.</h1>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div
        className={`${styles.galleryViewport} ${isDragging ? styles.dragging : ""}`}
        onPointerCancel={handlePointerEnd}
        onPointerDown={handlePointerDown}
        onPointerLeave={handlePointerEnd}
        onPointerMove={handlePointerMove}
        onScroll={growGalleryIfNeeded}
        onPointerUp={handlePointerEnd}
        ref={galleryViewportRef}
      >
        <div
          className={styles.galleryGrid}
          aria-label="Project photos"
          aria-live="polite"
          data-project-grid
          style={
            {
              gridTemplateColumns: `repeat(${
                (blockRange.maxColumn - blockRange.minColumn + 1) * 3
              }, var(--project-tile-width))`,
              gridTemplateRows: `repeat(${
                (blockRange.maxRow - blockRange.minRow + 1) * 2
              }, calc(var(--project-tile-width) * 0.75))`,
            } as CSSProperties
          }
        >
          {galleryTiles.map(({ blockColumn, blockRow, project, projectColumn, projectRow }) => {
            const isActive = project.slug === activeProject.slug;

            return (
              <Link
                aria-label={project.title}
                className={`${styles.photoTile} ${isActive ? styles.activePhoto : ""}`}
                data-project-tile
                href={`/projects/${project.slug}`}
                key={`${project.slug}-${blockColumn}-${blockRow}`}
                onClick={(event) => {
                  if (dragState.current.didDrag) {
                    event.preventDefault();
                    return;
                  }

                  event.preventDefault();
                  setActiveSlug(project.slug);
                }}
                style={
                  {
                    gridColumn: (blockColumn - blockRange.minColumn) * 3 + projectColumn + 1,
                    gridRow: (blockRow - blockRange.minRow) * 2 + projectRow + 1,
                  } as CSSProperties
                }
              >
                <span
                  className={styles.photo}
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
                <span className={styles.photoCaption}>
                  <span className={styles.photoTitle}>{project.title}</span>
                  <span className={styles.photoMeta}>
                    {project.location} / {project.year}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className={`${styles.projectPicker} ${isMenuOpen ? styles.open : ""}`}>
        <button
          aria-expanded={isMenuOpen}
          aria-controls="projects-menu"
          className={styles.pickerButton}
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          Projects
        </button>

        <nav className={styles.menu} id="projects-menu" aria-label="Projects">
          {projects.map((project) => {
            const isActive = project.slug === activeProject.slug;

            return (
              <button
                aria-pressed={isActive}
                className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
                key={project.slug}
                onClick={() => {
                  setActiveSlug(project.slug);
                  setIsMenuOpen(false);
                }}
                onFocus={() => setActiveSlug(project.slug)}
                onMouseEnter={() => setActiveSlug(project.slug)}
                type="button"
              >
                {project.title}
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
