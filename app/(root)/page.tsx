import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return (
        <section className="card-cta">
          <div className="flex flex-col gap-6 max-w-lg">
            <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
            <p className="text-lg">
              Practice real interview questions & get instant feedback
            </p>

            <div className="flex gap-4">
              <Button asChild className="btn-primary max-sm:w-full">
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild variant="outline" className="max-sm:w-full">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </div>
          </div>

          <Image
            src="/robot.png"
            alt="robo-dude"
            width={400}
            height={400}
            className="max-sm:hidden"
          />
        </section>
      );
    }

    const [userInterviews, allInterviews] = await Promise.all([
      getInterviewsByUserId(user.id),
      getLatestInterviews({ userId: user.id }),
    ]);

    const hasPastInterviews = userInterviews?.length > 0;
    const hasUpcomingInterviews = allInterviews?.length > 0;

    return (
      <>
        <section className="card-cta">
          <div className="flex flex-col gap-6 max-w-lg">
            <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
            <p className="text-lg">
              Practice real interview questions & get instant feedback
            </p>

            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/interview">Start an Interview</Link>
            </Button>
          </div>

          <Image
            src="/robot.png"
            alt="robo-dude"
            width={400}
            height={400}
            className="max-sm:hidden"
          />
        </section>

        <section className="flex flex-col gap-6 mt-8">
          <h2>Your Interviews</h2>

          <div className="interviews-section">
            {hasPastInterviews ? (
              userInterviews?.map((interview) => (
                <InterviewCard key={interview.id} interview={interview} />
              ))
            ) : (
              <p>No interviews yet. Start your first interview!</p>
            )}
          </div>
        </section>

        <section className="flex flex-col gap-6 mt-8">
          <h2>Latest Interviews</h2>

          <div className="interviews-section">
            {hasUpcomingInterviews ? (
              allInterviews?.map((interview) => (
                <InterviewCard key={interview.id} interview={interview} />
              ))
            ) : (
              <p>No interviews available.</p>
            )}
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error in Home page:", error);
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="text-gray-600">Please try again later</p>
      </div>
    );
  }
}

export default Home;
