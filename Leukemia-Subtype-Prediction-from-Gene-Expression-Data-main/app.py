from flask import Flask, render_template, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# Load your saved model
model = joblib.load("model/knn_model.pkl")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get user input from form
        data = request.form["gene_values"]
        # Convert the input string into a list of floats
        gene_values = np.array([float(x.strip()) for x in data.split(",")]).reshape(1, -1)
        # Predict the subtype
        prediction = model.predict(gene_values)
        return jsonify({"subtype": prediction[0]})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
