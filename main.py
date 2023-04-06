from flask import Flask, render_template
from flask import send_from_directory
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/resume/<industry>')
def resume(industry):
    if industry == 'tech':
        image_name = f"resume_tech{random.randint(1, 4)}.png"
    elif industry == 'finance':
        image_name = f"resume_finance{random.randint(1, 3)}.png"
    else:
        return 'Invalid industry', 400

    return send_from_directory('static/images', image_name)
  

@app.route('/resume-builder')
def resume_builder():
    return render_template('resume_builder.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)





