from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pandas as pd
import joblib

class RecommendationModel:
    def __init__(self):
        self.model = RandomForestClassifier()
        self.data = None

    def load_data(self, file_path):
        self.data = pd.read_csv(file_path)

    def preprocess_data(self):
        # Implement data preprocessing steps here
        # For example, handling missing values, encoding categorical variables, etc.
        pass

    def train(self):
        if self.data is None:
            raise ValueError("Data not loaded. Please load data before training.")
        
        X = self.data.drop('target', axis=1)  # Replace 'target' with the actual target column name
        y = self.data['target']  # Replace 'target' with the actual target column name
        
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        self.model.fit(X_train, y_train)
        
        predictions = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, predictions)
        print(f"Model accuracy: {accuracy}")

    def save_model(self, file_path):
        joblib.dump(self.model, file_path)

    def load_model(self, file_path):
        self.model = joblib.load(file_path)

    def predict(self, input_data):
        return self.model.predict(input_data)