# volto-plausible

[Plausible.io](https://plausible.io/) integration for Volto projects.

Install with mrs-developer (see [Volto docs](https://docs.voltocms.com/customizing/add-ons/)) or with:

```bash
yarn add volto-plausible
```

Created with [voltocli](https://github.com/nzambello/voltocli).

## Usage

Apply this addon to your Volto project, then configure it in `config.js` with your site's domain, accordingly to your Plausible configuration:

```js
applyPlausibleConfig({ config, domain: 'rawmaterial.it' });
```
