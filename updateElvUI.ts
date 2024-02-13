import * as mod from "https://deno.land/std@0.201.0/streams/write_all.ts";
import * as path from "https://deno.land/std@0.57.0/path/mod.ts";

// DL
const r = await fetch("https://api.tukui.org/v1/addon/elvui");
const json = await r.json();
const resp = await fetch(json["url"]);

if (!(resp && resp.ok)) Deno.exit(1);
const name = `${json.name}-${json.version}.zip`;

const blob = await resp.blob();

const buf = await blob.arrayBuffer();
const data = new Uint8Array(buf);

const file = await Deno.create(name);
await mod.writeAll(file, data);

// Unzip
const command = new Deno.Command("./unzipToAddons.sh", {
  args: [name],
  stdout: "piped",
  stderr: "piped",
});

const process = command.spawn();

const { success, code, stderr, stdout } = await process.output();

if (!success) {
  throw new Error(`$Command failed: code ${code}, message: ${stderr}`);
} 
else {
  console.log(stdout);
}

export {};
