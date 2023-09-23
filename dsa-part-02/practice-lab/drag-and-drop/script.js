
        const draggableObj = document.querySelector('.container');
        const draggableImg = document.getElementById('draggable');
        const undoBtn = document.getElementById('undo');
        const redoBtn = document.getElementById('redo');

        let currPoints = [];
        let prevPoints = [];
        let isDragging = false;
        let offsetX, offsetY;

        document.addEventListener('mousemove', dragObj);
        draggableImg.addEventListener('mousedown', dragStart);
        document.addEventListener('mouseup', dragEnd);

        function dragStart(e) {
            isDragging = true;
            offsetX = e.clientX - draggableImg.getBoundingClientRect().left;
            offsetY = e.clientY - draggableImg.getBoundingClientRect().top;
            draggableImg.style.cursor = "grabbing";
        }

        draggableObj.addEventListener('click', function (e) {
            if (isDragging) return; // Don't mark while dragging

            const newPoint = {
                top: e.clientY - 5 + 'px',
                left: e.clientX - 5 + 'px'
            };

            currPoints.push(newPoint);
            mark(newPoint);
        });

        function mark(direction) {
            const marker = document.createElement('div');
            marker.setAttribute('id', 'marker');
            marker.style.top = direction.top;
            marker.style.left = direction.left;
            draggableObj.appendChild(marker);
        }

        // Undo marking
        undoBtn.addEventListener('click', () => {
            if (currPoints.length > 0) {
                const removedPoint = currPoints.pop();
                prevPoints.push(removedPoint);
                removeLastMarker();
            }
        });

        // Redo marking
        redoBtn.addEventListener('click', () => {
            if (prevPoints.length > 0) {
                const restoredPoint = prevPoints.pop();
                currPoints.push(restoredPoint);
                mark(restoredPoint);
            }
        });

        function removeLastMarker() {
            const markers = document.querySelectorAll('#marker');
            const lastMarker = markers[markers.length - 1];
            if (lastMarker) {
                lastMarker.remove();
            }
        }

        function dragObj(e) {
            if (!isDragging) return;

            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            if (newX >= 0 && newY >= 0 &&
                newX + draggableImg.clientWidth <= draggableObj.clientWidth &&
                newY + draggableImg.clientHeight <= draggableObj.clientHeight) {
                draggableImg.style.top = newY + 'px';
                draggableImg.style.left = newX + 'px';
            }
        }

        function dragEnd() {
            isDragging = false;
            draggableImg.style.cursor = 'grab';
        }
 
