<div align="center">
 <h1>iwant-style</h1>
<img src="https://user-images.githubusercontent.com/24671133/50561390-55f0b200-0cf1-11e9-8d3c-fe81e3201024.png" width="200" />

Import ready styles using CSS in JS to be used in conjunction with stylized components.

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/mariorodeghiero/iwant-style/issues)
<a href="https://badge.fury.io/js/iwant-style"><img src="https://badge.fury.io/js/iwant-style.svg" alt="npm version" height="18"></a>
[![Feature Requests](https://img.shields.io/github/issues/mariorodeghiero/iwant-style/feature-request.svg)](https://github.com/mariorodeghiero/iwant-style/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/mariorodeghiero/iwant-style/bug.svg)](https://github.com/mariorodeghiero/iwant-style/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)
[![npm downloads](https://img.shields.io/npm/dt/iwant-style.svg?style=flat-square)](http://npm-stat.com/charts.html?package=iwant-style)
[![The MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

</div>

## Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Components](#components)

  - [Preloader](#Preloader)
  - [Avatar](#Avatar)
  - [Button](#Button)
  - [Input](#Input)
  - [Card](#Card)
  - [Pagination](#Pagination)
  - [Navbar](#Navbar)
  - [Background](#Backgound)

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
| `${preloader(param)}` | `"circle"` |           |

### Avatar

##### Usage

```javascript
  import styled from 'styled-components';

  import { avatar } from 'iwant-style';

  const Avatar = styled.img`
    ${avatar};
  `;

  ...
    <Avatar src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample9.jpg' />
  ...
```

##### Properties

| Name               | Parameter   | Default  |
| ------------------ | ----------- | -------- |
| `${avatar}`        |             | `person` |
| `${avatar(param)}` | `"online"`  |          |
| `${avatar(param)}` | `"offline"` |          |

### Button

##### Usage

```javascript
  import styled from 'styled-components';

  import { btn } from 'iwant-style';

  const Button = styled.button`
    ${btn};
  `;

  ...
    <Button>Start</Button>
  ...
```

##### Properties

| Name            | Parameter   | Default  |
| --------------- | ----------- | -------- |
| `${btn}`        |             | `square` |
| `${btn(param)}` | `"disable"` |          |
| `${btn(param)}` | `"float"`   |          |

### Input

##### Usage

```javascript
  import styled from 'styled-components';

  import { input } from 'iwant-style';

  const Input = styled.div`
    ${input};
  `;

  ...
     <Input>
      <input type='text' required />
      <span />
      <label>Name</label>
    </Input>
  ...
```

##### Properties

| Name              | Parameter | Default     |
| ----------------- | --------- | ----------- |
| `${input}`        |           | `animation` |
| `${input(param)}` | `"fixed"` |             |

### Card

##### Usage

```javascript
  import styled from 'styled-components';

  import { card } from 'iwant-style';

  const Card = styled.div`
    ${card};
  `;

  ...
     <Card>
      <h1>Title</h1>
      <p>lorem inpson</p>
    </Card>
  ...
```

##### Properties

| Name             | Parameter   | Default |
| ---------------- | ----------- | ------- |
| `${card}`        |             | `info`  |
| `${card(param)}` | `"profile"` |         |

### Pagination

##### Usage

```javascript
  import styled from 'styled-components';

  import { pagination } from 'iwant-style';

  const Pagination = styled.ul`
    ${pagination};
  `;

  ...
     <Pagination>
            <li>
              <a href='#'>&lt;</a>
            </li>
            <li>
              <a href='#'>1</a>
            </li>
            <li>
              <a href='#'>2</a>
            </li>
            <li>
              <a href='#'>3</a>
            </li>
            <li>
              <a href='#'>&gt;</a>
            </li>
    </Pagination>
  ...
```

##### Properties

| Name                   | Parameter | Default |
| ---------------------- | --------- | ------- |
| `${pagination}`        |           | `arrow` |
| `${pagination(param)}` | `"dark"`  |         |

### Navbar

##### Usage

```javascript
  import styled from 'styled-components';

  import { navbar } from 'iwant-style';

  const Navbar = styled.div`
    ${navbar};
  `;

  ...
     <Navbar>

    </Navbar>
  ...
```

##### Properties

| Name               | Parameter | Default |
| ------------------ | --------- | ------- |
| `${navbar}`        |           | `clean` |
| `${navbar(param)}` | `"fixed"` |         |

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
