# convert-slash-exec
> NPM utility to execute commands regardless of path seperators

## Why?
Executing binaries bundled with your Node projects seems nigh impossible
to get working with NPM scripts. 
Even if you write shell scripts to wrap your executable it is hard to get
past these two things:

- You cannot have an executable in a subdirectory due to different path seperators
- You cannot refer to an executable in the current directory on Unices without prefixing the path with `./`, which breaks on Windows.

This little util fixes these two annoyances.

## Usage: 
```
convert-slash-exec some/exe/in/subdir

convert-slash-exec ./my-command 
```

This will simply execute those commands as usual on Unices, but in the first case all slashes will become backslashes
and in the second example the prefix will be removed.

