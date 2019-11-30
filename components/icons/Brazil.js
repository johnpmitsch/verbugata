import SvgWrapper from "./SvgWrapper";

const Brazil = props => (
  <SvgWrapper
    d="M171 52l-3 10c2.31-.42 9.01-1.83 10.98-1.52 4.67.75 5.08 5.02 2.37 8.24-2.98 3.54-7.87 3.19-12.35 5.33-7.48 3.57-12.39 12.89-22 11.72-2.73-.33-4.52-1.45-7-2.14-5.48-1.52-7.84.29-9-6.63l-16 1c2.02 3.37 6.62 10.03.85 12.55-2.19.97-8.65-.26-8.65 3.51-.01 3.13 5.79 5.18 7.19 10.94 1.08 4.45-1.78 11.58-2.91 16l-2.38 15c-.59 2.43-1.74 6.74-4.32 7.75-3.69 1.45-5.8-3.51-11.78-2.1-4.43 1.05-15.64 7.62-17.43 11.67-.97 2.19-.12 5.21-2.12 9.68-1.88 4.19-5.79 8.15-6.19 12.96-.09 1.09 3.34 11.6 3.95 12.75.62 1.17 1.63 2.3 2.61 3.18 5.35 4.78 7.43.96 11.18 10.11 3.83-1.09 12.34-6.26 15.47-3.96 2.23 1.64.83 4.72 1.51 8.94.92 5.66 6.87 7.22 12.02 6.79 4.45-.38 5.33-3.42 8.17-4.51 2.06-.79 7.86.5 11.11-2.21 1.62-1.36 2.02-3.82 4.02-5.74 3.1-2.97 12.84-4.33 16.66-2.29 6.64 3.56 2.88 7.82 3.35 12.98.32 3.49 6.99 13.89 10.07 15.45l4.62 1.48 6 3.31 12 3.8c4.11 1.16 5-.59 10 1.8 10.28 4.9 20.65 17.16 18 29.16 8.22 3.42 11.7 1.08 20 1 .01 3.16-.14 7.82 1.4 10.63 1.7 3.09 6.46 4.95 7.41 13.37.81 7.14-3.47 18.29-3.77 26l.96 18c11.4 0 16.05-1.48 24.98 6.93 5.19 4.87 4.99 5.16 5.02 12.07 11.83 1.86 13.6 8.31 11 19 1.72.38 3.05.46 4.44 1.74 3.03 2.78 5.39 17.34 3.82 21.22-1.32 3.28-3.47 3.88-5.98 5.84l-6.29 5.57-8.99 5.53c-5.37 3.77-9.52 10.54-13 16.1l14 8.3 15.04 10.19V455l5.83.6 8.29 11.44.84 5.96c2.46-3.18 5.15-9.99 5.44-14 .23-3.06-1.13-4.95-.62-8 .47-2.85 4.18-9.4 5.8-12 6.11-9.81 12.01-7.61 10.38 3 4.93-4.94 8.26-14.58 11.32-21 4.62-9.69 7.95-8.36 7.67-20-.2-8.09-2.94-8.98-2.13-14 2.21-13.57 19.7-31.46 34.14-30l7.23-11.9 4.77-3.63h11.96L403 345c5.28-1.71 13.27-7.31 15.98-12.17 1.56-2.8.52-5.52 2.76-8.57 3.29-4.49 7.16-3.54 9.73-16.26l.92-18c1.41-6.66 6.68-10.76 6.56-19l-2.78-16c-.56-5.3.27-8.08.65-13 .19-2.52-.42-5.74.52-7.98 2.92-6.99 9.14-4.43 12.56-8.31L460.43 209c5.61-7.86 11-15.54 15.71-24 1.84-3.3 4.91-9.14 4.62-12.96-.28-3.79-2.95-4.77-4.17-8.08-.93-2.54-.21-5.43-1.61-7.54-3.56-5.34-12.45-1.76-15.42-4.1l-3.28-4.37c-2.04-1.72-4.18-.82-9.11-5.99-3.67-3.86-5.38-7.81-10.18-10.74-6.63-4.03-28.7-6.28-36.99-6.65-4.83-.21-7.9-2.43-13-.92-4.29 1.27-7.98 5.25-10.48 3.48-2.41-1.72.98-9.39 1.48-12.13l-14.91-2.6c-5.09-2-4.82-7.18-15.05-6.35-4.91.4-5.44 3.43-8.37 6.95-2.73 3.29-11.17 11.6-14.67 13.72-4.81 2.91-5.95-.72-7-4.72-5.16-.18-10.13-2.18-4.76-7.62 6.9-6.99 17.29-5.79 19.76-17.38-5.59 0-11.85-.88-16.58 2.74-3.44 2.63-11.01 11.99-15.27 11.94-4.74-.06-1.9-8.34-1.06-10.68 3.14-8.73 9.18-15.66 17.91-19-1.78-5.58-4.99-6.3-8.37-11-3.82-5.32-6.71-13.54-7.63-20-2.77 5.83-7.06 21.71-14.01 23.18-2.34.5-4.5-1.16-7.99-1.5-5.44-.54-5.35.01-9-4.68l-10.85-2c.25 2.32 1.77 6.51 0 8.4-1.91 2.4-6.48 1.13-9.15.92-9.36-.73-10.41 2.08-18 4.97-2.2.84-6.4 2.54-8.63 1.51-1.63-.77-4.01-4.29-5.17-5.8-2.39-3.1-5.86-7.19-6.78-11-1.15-4.69 1.32-11.51 1.58-17-10.02-.83-3.32-6.32 0-11-9.7-2.19-9.24 6.25-16.04 9.83-2.46 1.29-5.33 1.06-7.96 1.8-11.2 3.14-5.7 3.37-19 3.37z"
    {...props}
  />
);

export default Brazil;
