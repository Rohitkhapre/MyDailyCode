import joblib

model = joblib.load('salary_model.pk1')

print("Enter your exp: " , end='')
exp= float(input())

p = model.predict([[exp]])
print(p)