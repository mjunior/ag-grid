---
title: "Combination Charts"
---

This section show how to create Combination Charts - charts consisting of different series types.

A combination chart combines two or more series types allowing for flexible data visualisations.

## Combination Series Types

It is possible to create Combination Charts using the following series types: `column`, `bar`, `line`, `area` and `scatter`.

Unlike charts with a single series type, the `type` property must be specified explicitly on each individual series 
object in the `series` options array, as shown below:

```js
series: [
    {
      type: "column", // use 'column' series
      xKey: "year",
      yKey: "men",
      // ...other series options
    },
    {
      type: "line", // use 'line' series
      xKey: "year",
      yKey: "portions",
      // ...other series options
    },
]
```
The above snippet demonstrates the config required for a combination chart consisting of a `column` and `line` series.

The following example demonstrates two common combinations types, note that:

- Series are rendered according to the order in which they are added in the `series` array.
- A [Secondary Axis](../axes/#multiple-axes-in-a-single-direction) with a different scale is included.
- The `series` configurations are logged in the dev console when switching between combination charts.

<chart-example title='Combination Charts' name='combination' type='generated'></chart-example>

## Next Up

Continue to the next section to learn about [layout](../layout/).
