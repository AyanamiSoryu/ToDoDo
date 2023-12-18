# ToDoDo Project

ToDoDo is a pet project inspired by the principles of Atomic design and Block Element Modifier (BEM). It serves as a platform for implementing ideas and incorporating the latest technical solutions in both frontend and backend development. At its core, ToDoDo is a to-do list application.

# Project Structure

The ToDoDo project follows a well-organized structure for maintaining clarity and modularity.

```
/ToDoDO
  /node_modules
  /public
  /src
    /@types
    /ui
      /pages
        /App.tsx
      /components
        /atoms
        /molecules
        /organisms
        /templates
    /utils
  /package.json
  /tsconfig.json
  /webpack.config.js
```

## `/src`

The source code of the project is organized under the `/src` directory, containing subdirectories for different aspects of the application.

### `/@types`

Contain a declarations for TypeScript.

### `/ui`

Frontend part of project's web interface.

#### `/pages`

The highest level of fidelity, the "pages" directory represents specific instances of templates. Pages serve as concrete implementations where the design and functionality come together. This is where we witness the actualization of our design and the creation of unique, specific user interface instances.

#### `/components`

The `/components` directory holds reusable components categorized by functionality.

##### `/atoms`

The "atoms" directory serves as the home for Atoms, the basic building blocks of matter in our design system. In a web interface context, atoms are equivalent to components such as form labels, inputs, or buttons. These are the smallest, indivisible elements that form the foundation of our user interface.

##### `/molecules`

Within the "molecules" directory, you'll find Molecules, which are groups of atoms bonded together. Molecules represent the smallest fundamental units of a compound in our design system. These groups of atoms form cohesive units that possess their own properties, serving as the backbone of our design systems.

##### `/organisms`

Moving up the hierarchy, the "organisms" directory houses Organisms. Organisms are groups of molecules joined together to create relatively complex and distinct sections of the interface. These entities are more intricate than molecules and contribute to the overall structure of the application.

##### `/templates`

The "templates" directory contains Templates that consist mostly of groups of organisms stitched together. Templates represent higher-level structures where we begin to see the design coming together. This level introduces concepts like layout and represents a more comprehensive view of the application structure.

### `/utils`

The `/utils` directory contains utility files, including API configuration and helper functions.

### `/styles`

Global styles, such as theme configurations and common styling utilities, are kept in the `/styles` directory.

### `App.tsx`

The main application file responsible for orchestrating the components and defining the application's structure.

## `/config`

Configuration files, such as webpack configuration, are stored in the `/config` directory for easier management and customization.

## Usage

To use ToDoDo, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/ToDoDo.git`
2. Navigate to the project directory: `cd ToDoDo`
3. Install dependencies: `npm install`

### Scripts

The project includes several useful scripts:

- **eslint**: Run ESLint to analyze and identify issues in the source code.
  ```bash
  npm run eslint
  ```

- **serve**: Start the development server using webpack.
  ```bash
  npm run serve
  ```

- **build**: Build the project using webpack.
  ```bash
  npm run build
  ```

4. Start the application: `npm start`

Feel free to explore and contribute to the project. We welcome your ideas and suggestions.

## Contribution

If you would like to contribute to ToDoDo, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

We appreciate your contributions and look forward to making ToDoDo even better together!

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
