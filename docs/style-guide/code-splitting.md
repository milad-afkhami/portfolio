## Lines of Code

I tried to keep all the components under 150(or even better, 100) lines of code.

## Checking

To check all the files you can run this command:

```sh
git ls-files | xargs wc -l | awk '$1 > 150'
```

This command will print out all the files with more than 150 lines of code.

## Exceptions

- images
- css files
- documentations
- data files
- json configurations

I tried to prevent any other files from violating this rule.
