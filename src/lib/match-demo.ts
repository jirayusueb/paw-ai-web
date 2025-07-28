import { demonstrateMatch, demonstrateAsyncMatch } from "./match.test";

// Run the demonstrations
async function main() {
  demonstrateMatch();
  await demonstrateAsyncMatch();
}

// Run if this file is executed directly
if (require.main === module) {
  main().catch(console.error);
}

export { main as runMatchDemo };
