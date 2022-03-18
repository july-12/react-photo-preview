# react-photo-preview

simple photo preview dialog

![intro](https://user-images.githubusercontent.com/920487/158983710-0d7c5bf4-39fe-445f-9ef7-1a1de60af21c.png)

<!-- [![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Minified size][min-size-image]][bundlephobia-url]
[![Gzip size][gzip-size-image]][bundlephobia-url] -->

# Install

```bash
yarn add react-photo-preview
```

# Basic usage

```js
<PhotoPreview
  sources={source}
/>
```
# API


| name                                     | type       | default     | note                                                                                                                                                                                                                                                                                                  |
|------------------------------------------|------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| defaultCurrentIndex                                     | _String_   | `0`     | default index of active preview image |
| sources                                     | [PreviewItem](##PreviewItem)[]   | `[]`     | preview image sources |
| ...restProps                                     |   |      | props of [rc-dialog](https://github.com/react-component/dialog#api) |


## PreviewItem
| name                                     | type       | default     | note                                                                                                                                                                                                                                                                                                  |
|------------------------------------------|------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                                     | _String_   |      |  identify |
| title                                     | _String_   |      | title  |
| src                                     | _String_   |      |  location |
| desc                                     | _String_   |      |  description |
