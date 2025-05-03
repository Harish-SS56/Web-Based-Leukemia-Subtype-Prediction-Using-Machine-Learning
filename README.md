# Web-Based-Leukemia-Subtype-Prediction-Using-Machine-Learning
A web-based leukemia subtype prediction tool using ML and DAA. Features include gene selection using mRMR and classification via KNN, SVM, and Random Forest. Built with Vite, React, TypeScript, Tailwind CSS (UI) and Flask (backend). Includes Knapsack for optimal feature or model selection

https://github.com/user-attachments/assets/ccd11527-c55f-46b2-b754-78d3f44362ca


---

# 🧬 LeucoPredic: Web-Based Leukemia Subtype Prediction Using Machine Learning

LeucoPredic is an AI-powered web platform that predicts subtypes of **Acute Lymphoblastic Leukemia (ALL)** based on gene expression input. Built with a modern tech stack, it integrates **machine learning algorithms** and **discrete algorithmic approaches (DAA)** like **Knapsack** and **mRMR** for optimal feature selection and classification accuracy.

---

## 🔍 Features

* 🧪 Predict ALL subtypes using gene expression data
* 🧠 Machine Learning models: **KNN**, **SVM**, **Random Forest**, **Logistic Regression**
* 🎯 Feature selection using **mRMR** (Minimum Redundancy Maximum Relevance)
* 📦 Discrete Algorithmic Approaches: **Knapsack** for optimal model/feature optimization
* 🌐 Modern, responsive UI built with **Vite + React + TypeScript + Tailwind CSS + shadcn/ui**
* 🔗 Flask backend for model integration and inference
* 📊 Displays prediction results with confidence scores and treatment guidance

---

## 🏥 Why This Matters

Accurate subtyping of leukemia is **critical** for determining the right treatment plan. This tool aids medical researchers and physicians by automating subtype prediction and reducing diagnostic errors through high-accuracy machine learning.

---

## ⚙️ Tech Stack

### 🧩 Frontend

* Vite
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### 🔧 Backend

* Python (Flask)
* Scikit-learn (ML models)
* Pandas, NumPy
* Feature selection using `skfeature` or custom mRMR

---

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/leucopredic.git
cd leucopredic
```

2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

3. Run the backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

4. Navigate to `localhost:5173` to use the app.

---

## 🧠 ML Models Used

| Model                        | Purpose                         |
| ---------------------------- | ------------------------------- |
| K-Nearest Neighbors (KNN)    | Fast, intuitive classification  |
| Support Vector Machine (SVM) | Robust decision boundary        |
| Random Forest                | High-accuracy ensemble learning |
| Logistic Regression          | Baseline interpretability model |

---

## 📚 How it Works

1. **User uploads gene expression data**
2. **Feature selection via mRMR or Knapsack algorithm**
3. **Prediction using trained ML models**
4. **Result visualization with subtype classification & confidence**

---

## 📂 Data Sources

* Public leukemia datasets from **NCBI GEO**
* Gene expression profiles from microarray/RNA-seq studies

---

## ✨ Sample Output

* Subtype: **B-ALL with ETV6-RUNX1**
* Confidence: **92.7%**
* Suggested Therapy: Standard chemo with excellent prognosis

---

## 👨‍💻 Author

**Harish S.S.**
Machine Learning & Bioinformatics Enthusiast
Email: harishdeepikassdeepikass@gmail.com

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` file for details.



