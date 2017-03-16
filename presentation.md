https://docs.google.com/presentation/d/1ZKg5QOuuUazzAY4-o3HXAjvk_HNg0CPgxjhLI7lfZro/edit#slide=id.p

# about me
I'm a full-stack javascript developer with a passion for architecture, tools and performance.
I am a big fan of react, webpack, unit-testing with jest and other modern tools.
I work for Xebia and help clients make the right technical choices and achieve technical success. I write javascript.

# understanding webpack

## synaspis
Webpack is perceived as a complicated tool, because it's really advanced.
It's configuration file is the cause of much confusion and possibly frustration.
In this talk I'll improve your understanding of what webpack does, and how it does it.
I'll talk about the philosophy, concepts, dependencies, resolvers, loaders, modules, compilation, plugins, code-splitting
and how to upgrade to webpack 2.

## the problem we're solving
When building a web application, a lot of 'stuff' needs to come together the right way.
- Data needs to be rendered into templates
- The right CSS needs to be provided
- Images, fonts etc need to be provided
- The application javascript
-

## philosophy
- Everything is a module
- Create a dependency graph
- Output a bundle

## concepts:
- dependency
- resolver
- normalmodulefactory
- parser
- loader
- module
- compilation

- entrypoint
- chunks - dependencyblock
- loaders
- plugins

### Entrypoint
start at a specified file or files

### Chunks
End up with a file for each entrypoint

### (1) A dependency
We start out with just a simple string

### (2) Resolver
Convert to a full path
Add a unique id

### (3) Normalmodulefactory
Run though any loaders
Run through Parser
Find dependencies -> 1

### (4) Module
Wrap with a function providing a require fn & __dirname & __filename

### (5) Compilation
Run plugins on dependency graph

## plugins
run || watch-run
compilation
compile
make
after-compile
emit
after-emit
done || failed
invalid
after-plugins
after-resolvers
normal-module-loader
seal
optimize
optimize-tree
after-optimize-modules
optimize-chunks

after-optimize-chunks
optimize-module-ids
after-optimize-modules-ids
revive-chunks
optimize-chunk-order
optimize-chunk-ids
after-optimize-chunk-ids
record-chunks
before-hash
after-hash
before-chunk-assets
record
optimize-chunk-assets
after-optimize-chunk-assets
optimize-assets
after-optimize-assets
build-module
succeed-module || failed-module
module-asset
chunk-asset
before-resolve
after-resolve
resolve
resolve-step
module
directory
file
module-module
module-loader-module
- **custom**

## targets
- node
- web
- webworker
- electron

## What's in those bundles?
Let's run webpack with a few known graph, and see how it bundles it with different configs.


## What about webpack 2
Migrating is super easy, as long as the plugins & loaders you're using are updated, changing your config is real easy.



---

## Demo

- small tour of the modules code
- show the config

- run webpack entrypoint index
- show to result

- run webpack entrypoint async
- show the result

- switch to target 'web'
- run webpack entrypoint async
- show the result

- switch to target 'node'
- run webpack entrypoint exotic
- show output
