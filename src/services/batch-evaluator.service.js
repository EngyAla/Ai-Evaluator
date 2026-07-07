import { evaluateRepository } from './repository-evaluator.service.js';

/**
 * Sequentially evaluates a batch of student repositories.
 * Catches individual evaluation errors and returns enriched results.
 *
 * @param {Object} options
 * @param {string} options.rubricFile - The relative name of the rubric markdown file.
 * @param {Array<Object>} options.students - The list of students with name and repositoryUrl.
 * @returns {Promise<Array<Object>>} Enriched batch evaluation results.
 */
export async function evaluateBatch({ rubricFile, students }) {
  const results = [];

  for (const studentInfo of students) {
    const { student, repositoryUrl } = studentInfo;

    try {
      const evalResult = await evaluateRepository({
        repositoryUrl,
        rubricFile
      });

      // Determine status from the raw score (passed requirements count)
      const score = evalResult.score;
      const status = score >= 60 ? 'Passed' : 'Failed';

      results.push({
        student,
        repository: repositoryUrl,
        status,
        summary: evalResult.summary,
        score,
        issues: evalResult.issues,
        totalIssues: evalResult.totalIssues
      });
    } catch (error) {
      console.error(`Error evaluating repository for ${student}:`, error);

      let errorMessage = error.message;
      if (error.message.includes('Repository cloning failed')) {
        errorMessage = 'Repository cloning failed.';
      } else if (error.message.includes('Gemini evaluation failed') || error.message.includes('AI evaluation failed')) {
        errorMessage = 'Gemini evaluation failed.';
      }

      results.push({
        student,
        repository: repositoryUrl,
        status: 'Error',
        summary: null,
        score: null,
        issues: [],
        totalIssues: 0,
        error: errorMessage
      });
    }
  }

  return results;
}
