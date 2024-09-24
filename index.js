let runs = 0;
        let wickets = 0;
        let balls = 0;
        let overs = 0;
        let history = [];

        function updateDisplay() {
            document.getElementById('runs').textContent = runs;
            document.getElementById('wickets').textContent = wickets;
            document.getElementById('balls').textContent = balls;
            document.getElementById('overs').textContent = `${overs}.${balls}`;
        }

        function addRuns(amount) {
            runs += amount;
            history.push({ type: 'runs', value: amount });
            updateDisplay();
        }

        function addWicket() {
            if (wickets < 10) {
                wickets++;
                history.push({ type: 'wicket', value: 1 });
                updateDisplay();
            }
        }

        function addBall() {
            balls++;
            if (balls === 6) {
                balls = 0;
                overs++;
            }
            history.push({ type: 'ball', value: 1 });
            updateDisplay();
        }

        function undo() {
            if (history.length === 0) return;

            const lastAction = history.pop();
            switch (lastAction.type) {
                case 'runs':
                    runs -= lastAction.value;
                    break;
                case 'wicket':
                    wickets--;
                    break;
                case 'ball':
                    if (balls === 0) {
                        balls = 5;
                        overs--;
                    } else {
                        balls--;
                    }
                    break;
            }
            updateDisplay();
        }

        function resetAll() {
            runs = 0;
            wickets = 0;
            balls = 0;
            overs = 0;
            history = [];
            updateDisplay();
        }

        // Initialize display
        updateDisplay();