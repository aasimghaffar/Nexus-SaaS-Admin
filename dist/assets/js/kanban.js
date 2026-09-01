/**
 * Nexus SaaS Admin - Kanban Board Interactions
 * Handles native HTML5 Drag & Drop, card sorting, moving between columns,
 * and column counter badge updates.
 */

document.addEventListener('DOMContentLoaded', () => {
  initKanbanBoard();
});

function initKanbanBoard() {
  const kanbanBoard = document.getElementById('kanban-board');
  if (!kanbanBoard) return;

  const cards = kanbanBoard.querySelectorAll('.kanban-card');
  const columns = kanbanBoard.querySelectorAll('.kanban-column-cards');

  let draggedCard = null;

  cards.forEach(card => {
    card.setAttribute('draggable', 'true');

    card.addEventListener('dragstart', (e) => {
      draggedCard = card;
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', card.id || '');
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      draggedCard = null;
      updateColumnCounts();
    });
  });

  columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      column.parentElement.classList.add('drag-over');

      const afterElement = getDragAfterElement(column, e.clientY);
      if (draggedCard) {
        if (afterElement == null) {
          column.appendChild(draggedCard);
        } else {
          column.insertBefore(draggedCard, afterElement);
        }
      }
    });

    column.addEventListener('dragleave', (e) => {
      if (!column.contains(e.relatedTarget)) {
        column.parentElement.classList.remove('drag-over');
      }
    });

    column.addEventListener('drop', (e) => {
      e.preventDefault();
      column.parentElement.classList.remove('drag-over');
      updateColumnCounts();
      
      if (window.NexusApp && window.NexusApp.showToast) {
        const colTitle = column.parentElement.querySelector('.column-title')?.textContent.trim() || 'Column';
        window.NexusApp.showToast({
          title: 'Task Moved',
          message: `Task successfully updated to "${colTitle}".`,
          type: 'info',
          duration: 2000
        });
      }
    });
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.kanban-card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  function updateColumnCounts() {
    columns.forEach(col => {
      const count = col.querySelectorAll('.kanban-card').length;
      const badge = col.parentElement.querySelector('.kanban-count-badge');
      if (badge) {
        badge.textContent = count;
      }
    });
  }

  // Initial count update
  updateColumnCounts();
}
