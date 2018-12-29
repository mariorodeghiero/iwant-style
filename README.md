<div align="center">
 <h1>iwant-style</h1>

Import ready styles using CSS in JS to be used in conjunction with stylized components.

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/mariorodeghiero/iwant-style/issues)
<a href="https://badge.fury.io/js/iwant-style"><img src="https://badge.fury.io/js/iwant-style.svg" alt="npm version" height="18"></a>
[![Feature Requests](https://img.shields.io/github/issues/mariorodeghiero/iwant-style/feature-request.svg)](https://github.com/mariorodeghiero/iwant-style/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/mariorodeghiero/iwant-style/bug.svg)](https://github.com/mariorodeghiero/iwant-style/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)
[![Coverage Status](https://coveralls.io/repos/github/mariorodeghiero/iwant-style/badge.svg?branch=master)](https://coveralls.io/github/mariorodeghiero/iwant-style?branch=master)
[![The MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

<a href="#">
<img src="" width="600" />
</a>

</div>

## Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Components](#components)
  - [Preloader](#Preloader)
- [How to Contribute](#Contributors)

## Getting Start

```bash
npm install iwant-style
```

```bash
npm install styled-components
```

## Usage

```javascript
  import styled from 'styled-components';

  import { preloader } from 'iwant-style';


  const PreloaderCircle = styled.div`
    ${preloader('circle')};
  `;

  ...
    <PreloaderCircle>
        <div />
    </PreloaderCircle>
  ...
```

## Components

### PreLoader

##### Usage

```javascript
  import styled from 'styled-components';

  import { preloader } from 'iwant-style';


  const PreloaderCircle = styled.div`
    ${preloader('circle')};
  `;

  ...
    <PreloaderCircle>
        <div />
    </PreloaderCircle>
  ...
```

##### Properties

| Name                  | Parameter  | Default   |
| --------------------- | ---------- | --------- |
| `${preloader}`        |            | `bubbles` |
| `${preloader(param)}` | `(circle)` |           |

### Backgraund

##### Usage

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Author

- [Mário Antônio do Amaral Rodeghiero](https://github.com/mariorodeghiero)

## Contributors

| [![Mário Rodeghiero](https://avatars1.githubusercontent.com/u/24671133?s=88&v=4)](https://github.com/mariorodeghiero) |
| --------------------------------------------------------------------------------------------------------------------- |


| [Mário Rodeghiero](https://github.com/mariorodeghiero)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
