# architect-stylus

[stylus](https://github.com/LearnBoost/stylus) plugin for 
[architect](https://github.com/c9/architect)

## Config Format

```js
{
  "packagePath": "./node_modules/architect-stylus",
  "src": __dirname+"/assets",
  "dest": __dirname+"/target",
  // Compress the output
  "compress": true,
  // Forces recompilation for every request
  "force": true
}
```

## Usage

Now we mount /target as a static path and we can access our
stylesheets at `http://0.0.0.0:{port}/{cssFolder}/{file.css}`
and it will be compiled on the fly

## TODO

- Provide some tests
