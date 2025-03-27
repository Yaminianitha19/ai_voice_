export interface Interview {
  id: string;
  userId: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt: string;
  finalized?: boolean;
}

export interface GetLatestInterviewsParams {
  userId: string;
  limit?: number;
}

export interface CreateFeedbackParams {
  interviewId: string;
  userId: string;
  transcript: Array<{ role: string; content: string }>;
  feedbackId?: string;
}

export interface GetFeedbackByInterviewIdParams {
  interviewId: string;
  userId: string;
}

export interface Feedback {
  id: string;
  interviewId: string;
  userId: string;
  totalScore: number;
  categoryScores: {
    communicationSkills: number;
    technicalKnowledge: number;
    problemSolving: number;
    culturalFit: number;
    confidence: number;
  };
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
}
