from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def test():
    return {'message': 'testing'}

if __name__ == '__main__':
    app.run(debug=True)