
# Network Security Quiz Bot 🔐

A locally-hosted quiz bot for network security education using open-source language models. Focuses on data privacy by running entirely on your local machine without internet dependencies.

## Features 🌟

- **Local Deployment**: Complete offline functionality using open-source LLMs
- **Multiple Question Types**:
  - Multiple Choice Questions
  - True/False Questions
  - Open-ended Questions
- **Topic Coverage**:
  - Random question generation
  - Topic-specific questions
  - Comprehensive feedback system

## Prerequisites 📋

- Python 3.8+
- CUDA-compatible GPU (recommended for faster inference)
- Minimum 16GB RAM
- 20GB free disk space

## Required Libraries 📚

```bash
# Core Dependencies
llama-cpp-python==0.2.6
langchain==0.0.331
transformers==4.36.0
sentence-transformers==2.2.2
faiss-cpu==1.7.4
pandas==2.1.3
numpy==1.24.3
PyYAML==6.0.1
tqdm==4.66.1

# Database
sqlite3

# UI/Interface
streamlit==1.28.2
streamlit-chat==0.11.0
```

## Installation 🔧

1. Clone the repository:
```bash
git clone https://github.com/yourusername/network-security-quiz-bot.git
cd network-security-quiz-bot
```

2. Create and activate virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
.\venv\Scripts\activate   # Windows
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Download the language model:
```bash
python scripts/download_model.py
```

## Dataset Preparation 📚

1. Place your training materials in the `data` directory:
   - Network security textbooks (PDF)
   - Lecture slides (PDF/PPTX)
   - Quiz databases (CSV/JSON)
   - Additional resources

2. Run the data preprocessing script:
```bash
python scripts/preprocess_data.py
```

## Project Structure 📁

```
network-security-quiz-bot/
├── data/                  # Training data and resources
├── models/               # Language model files
├── src/                  # Source code
│   ├── bot/             # Quiz bot core functionality
│   ├── database/        # Database operations
│   └── ui/              # User interface
├── scripts/             # Utility scripts
├── tests/               # Unit tests
├── config.yaml          # Configuration file
├── requirements.txt     # Dependencies
└── README.md           # Documentation
```

## Usage 🚀

1. Start the quiz bot:
```bash
python src/main.py
```

2. Launch the web interface:
```bash
streamlit run src/ui/app.py
```

3. Access the interface at `http://localhost:8501`

## Configuration ⚙️

Edit `config.yaml` to customize:
- Model parameters
- Question generation settings
- UI preferences
- Database configurations

## Known Issues and Solutions 🔍

1. **High Memory Usage**
   - Issue: Model requires significant RAM
   - Solution: Reduce model size in config.yaml or use CPU-only mode

2. **Slow Question Generation**
   - Issue: Initial question generation may be slow
   - Solution: Enable caching or pre-generate question pools

3. **GPU Memory Issues**
   - Issue: CUDA out of memory
   - Solution: Reduce batch size or use CPU inference

## Troubleshooting 🛠️

1. If encountering CUDA errors:
```bash
export CUDA_VISIBLE_DEVICES=""  # Force CPU mode
```

2. Database connection issues:
```bash
python scripts/db_repair.py
```

3. Model loading failures:
```bash
python scripts/verify_model.py
```

## Development Roadmap 🗺️

- [ ] Add support for diagram-based questions
- [ ] Implement spaced repetition
- [ ] Add exam simulation mode
- [ ] Enhance feedback system
- [ ] Support multiple languages

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Submit pull request

## Suggestions for Improvement 💡

1. **Performance Optimization**
   - Implement question caching
   - Optimize model inference
   - Add batch processing

2. **Feature Enhancements**
   - Add difficulty levels
   - Implement progress tracking
   - Create custom quiz paths

3. **User Experience**
   - Add dark mode
   - Implement keyboard shortcuts
   - Enhance mobile responsiveness

## Feedback System 📊

The bot provides:
- Immediate answer validation
- Detailed explanations
- Topic-wise performance analysis
- Improvement suggestions
- Progress tracking

## License 📄

MIT License - See LICENSE file for details

## Contact 📧

For issues and suggestions:
- Create an issue in the repository
- Email: your.email@example.com
- Discord: your_discord_server

## Acknowledgments 🙏

- Thanks to the open-source LLM community
- Network security course materials contributors
- Testing and feedback providers

---

**Note**: This project is under active development. Please check for updates regularly.
