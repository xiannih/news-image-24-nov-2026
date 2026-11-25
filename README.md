# The World in One Day — 24 November 2026

One image summing up the world's news of Tuesday 24 November 2026:
a newspaper front page drawn for this bounty.

Lead stories: a Brooklyn jury convicts Huawei on 10 of 12 counts
(trade secrets, bank fraud, Iran sanctions), and Iran says four tankers
hit mines in the Strait of Hormuz. Also inside: the Turkish helicopter
crash, the Cartagena hostage siege, Houthis closing on Aden, the Riyadh
PIF tower strike, Ukraine's drone hits on Russian ships, the killing of
Hamas's security chief in Gaza, Baghdad's takeover of Kurdish oilfields,
the Hanoi blast, Germany's access to Ukraine's DELTA system, and more.

Every story on the page was first reported on 24 November 2026
(sources: Reuters, CNN, US Dept. of Justice, Kyiv Independent).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes `entry.png` (1024×1024, under 1 MiB) to the output directory.
`main.ts` needs only the Node 22 standard library and no network.
