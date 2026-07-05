import { cloneRepository } from './github/downloader.js';
import { scanRepository } from './scanner/scanner.js';
import { readFiles } from './reader/reader.js';
import { buildPrompt } from './prompts/prompt-builder.js';

// Mock Assignment Details for Milestone 2 verification
const MOCK_ASSIGNMENT = {
  assignmentTitle: 'Beginner-a_week4',
  assignmentDescription: `Watch videos from Lesson 23 to Lesson 37.
Solve all assignments.
Upload your GitHub repository.`,
  rubric: `Task 1
- Use HTML only.
- Open the link in a new tab.
- Use bold text.`
};

async function main() {
  const repoUrl = process.argv[2];

  if (!repoUrl) {
    console.error('Error: Please provide a GitHub repository URL.');
    console.error('Usage: node src/main.js <github-repo-url>');
    process.exit(1);
  }

  try {
    // 1. Clone repository
    const { repositoryPath } = await cloneRepository(repoUrl);
    console.log('Repository cloned successfully.');

    // 2. Scan repository to discover target source files metadata
    const { filesMetadata } = await scanRepository({ repositoryPath });

    // 3. Read discovered files, fetching content and size, assigning IDs, and stripping absolutePath
    const { sourceFiles } = await readFiles({ filesMetadata });
    console.log(`${sourceFiles.length} source files found.`);

    // 4. Generate Prompt (Milestone 2)
    console.log('\nGenerating evaluation prompt...');
    const promptOutput = await buildPrompt({
      assignmentTitle: MOCK_ASSIGNMENT.assignmentTitle,
      assignmentDescription: MOCK_ASSIGNMENT.assignmentDescription,
      rubric: MOCK_ASSIGNMENT.rubric,
      sourceFiles
    });

    // 5. Print Prompt Builder Output Details
    console.log('\n--- Prompt Metadata ---');
    console.log(JSON.stringify(promptOutput.metadata, null, 2));

    console.log('\n--- Generated Prompt Preview (First 600 chars) ---');
    console.log(promptOutput.prompt.slice(0, 600) + '\n... [TRUNCATED] ...\n');

  } catch (error) {
    console.error('\nExecution failed:');
    console.error(error.message);
    process.exit(1);
  }
}

main();
