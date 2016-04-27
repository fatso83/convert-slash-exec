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

## In the wild
[`razor-cli`](https://github.com/fatso83/razor-cli-node) is a cross-platform NPM module that can compile Razor templates. In [its package.json](https://github.com/fatso83/razor-cli-node/blob/8f30ca04a1c595e5cf4c2d80849e1c9cdf6ec3a3/package.json#L11) you can 
see that it invoket `./nuget` to download its .NET dependencies. That command will invoke 
a `./nuget` shell script on Mac and Linux while on Windows it will run the `nuget.exe` command.
