import { css, Global } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html {
          font-size: 62.5%;
          -webkit-font-smoothing: antialiased;
          height: 100%;
        }

        body {
          font-family: Roboto, sans-serif;
          font-size: 16px; /* stylelint-disable unit-disallowed-list */
          margin: 0;
          min-height: 100vh;
          padding: 0;
        }

        img {
          height: auto;
          max-width: 100%;
        }

        a {
          &.disabled {
            pointer-events: none;
          }
        }

        button {
          appearance: none;
          background-color: transparent;
          border: 0;
          cursor: pointer;
          display: inline-block;
          font-family: inherit;
          line-height: 1;
          padding: 0;
        }
      `}
    />
  );
}
