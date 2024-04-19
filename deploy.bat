@echo off
set /p flag="Enter flag (dev/staging): "
set /p buildAdmin="Build admin app (true/false): "

if "%flag%"=="dev" (
    set user=discount
    set host=159.89.4.114
    set password=b2bdiscount
) else if "%flag%"=="staging" (
    set user=root
    set host=159.223.19.125
    set password=GNEBN7QEAh9OFt
) else (
    echo Invalid flag
    exit /b
)

if "%buildAdmin%"=="true" (
   echo y | npm run build:ssr && npm run build:admin && git add . && git commit -m "BUILD. %flag%" && git push
) else (
   echo y |  npm run build:ssr && git add . && git commit -m "BUILD. %flag%" && git push
)

if "%flag%"=="dev" (
		echo y | plink.exe -batch -ssh %user%@%host% -pw %password% sh build-fe.sh || echo "plink command failed"
) else (
	 	echo y | plink.exe -batch -ssh %user%@%host% -pw %password% sh ../home/discount./build-fe.sh || echo "plink command failed"
)
