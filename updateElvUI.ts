import * as mod from "https://deno.land/std@0.201.0/streams/write_all.ts";

let path = Deno.args[0];

if (!path) throw new Error("Missing WoW Directory!");

path = path.replace(/Warcraft_retail/, "Warcraft/_retail");

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
const command = new Deno.Command("unzip", {
  args: ["-o", name, "-d", path],
  stdout: "piped",
  stderr: "piped",
});

const process = command.spawn();

const { success, code, stderr, stdout } = await process.output();

if (!success) {
  rmDotZip();
  throw new Error(`$Command failed: code ${code}, message: ${new TextDecoder().decode(stderr)}`);
} else {
  console.log(new TextDecoder().decode(stdout));
}

rmDotZip();

export {};

function rmDotZip() {
  // Remove .zip archive when done
  new Deno.Command("rm", {
    args: [name],
    stdout: "piped",
    stderr: "piped",
  }).spawn();
}
