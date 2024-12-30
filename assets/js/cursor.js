document.addEventListener("DOMContentLoaded", () => {
            const cursorInner = document.querySelector(".cursor-inner");
            const cursorOuter = document.querySelector(".cursor-outer");

            if (cursorInner && cursorOuter) {
                // Track mouse position
                document.addEventListener("mousemove", (event) => {
                    const { clientX, clientY } = event;

                    // Update cursor positions
                    cursorInner.style.transform = `translate(${clientX}px, ${clientY}px)`;
                    cursorOuter.style.transform = `translate(${clientX}px, ${clientY}px)`;

                    // Make cursor visible
                    cursorInner.style.visibility = "visible";
                    cursorOuter.style.visibility = "visible";
                });

                // Add hover effects for specific elements
                document.querySelectorAll("a, .cursor-pointer").forEach((element) => {
                    element.addEventListener("mouseenter", () => {
                        cursorInner.classList.add("cursor-hover");
                        cursorOuter.classList.add("cursor-hover");
                    });

                    element.addEventListener("mouseleave", () => {
                        cursorInner.classList.remove("cursor-hover");
                        cursorOuter.classList.remove("cursor-hover");
                    });
                });
            }
        });