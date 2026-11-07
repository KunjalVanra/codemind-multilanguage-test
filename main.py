import json


class CodeAnalyzer:
    """Analyzes project information."""

    def __init__(self, project_name):
        self.project_name = project_name

    def analyze(self):
        print(f"Analyzing project: {self.project_name}")


def calculate_score(values):
    return sum(values) / len(values)


def main():
    analyzer = CodeAnalyzer("CodeMind")
    analyzer.analyze()
    score = calculate_score([80, 90, 100])
    print("Score:", score)


if __name__ == "__main__":
    main()
