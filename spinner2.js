let delay = 100
const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
for (let frame of animation) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, delay);
  delay += 200;
}
