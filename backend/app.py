from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def test():
    return {'message': 'testing'}


@app.route('/dataframe/<dataframe>')
def get_dateframe(dataframe):
    """
    Get a specific dataframe formatted as a json
    """
    match dataframe:
        case 'spending-by-category':
            return {'data': 'good category'}, 200
        
        case _:
            return {'error': f'{dataframe} is not a valid dataframe'}, 400
        
    return


if __name__ == '__main__':
    app.run(debug=True)