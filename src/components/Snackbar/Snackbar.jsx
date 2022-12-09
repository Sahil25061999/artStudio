import React from 'react';
import { useSnackbar } from '../../context/context_index';
import './Snackbar.css';
export const Snackbar = () => {
  const { snacks, displaySnack, dispatchSnacks } = useSnackbar();
  return snacks.map((snack) => {
    return (
      <div class="snackbar" style={{ display: displaySnack ? 'flex' : 'none' }}>
        <p class="snackbar-content">{snack.content}</p>
        <button
          class="btn btn-only-icon snackbar-close-btn"
          onClick={() => {
            dispatchSnacks({ type: 'CLOSE_SNACK' });
          }}
        >
          <span class="fa-solid fa-xmark"></span>
        </button>
      </div>
    );
  });
};
