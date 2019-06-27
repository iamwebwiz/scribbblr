# scribbblr

A command line utility for taking notes (scribbbles 😎)

## Installation

- Clone the repository

```bash
git clone https://github.com/iamwebwiz/scribbblr.git
```

- Change directory to cloned project

```bash
cd scribbblr
```

- Install dependencies

```bash
npm install
```

### Usage

- Fetch all scribbbles

```bash
node app list
```

- Add a new scribbble

```bash
node app new --title="Title" --content="Content" --date="DD-MM-YYYY"
```

- Get details of a scribbble

```bash
node app find --title="Title"
```

- Delete a scribbble

```bash
node app delete --title="Title"
```
