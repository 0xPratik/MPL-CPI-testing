import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MplTest } from "../target/types/mpl_test";

describe("mpl-test", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MplTest as Program<MplTest>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
