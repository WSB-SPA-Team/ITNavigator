import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function LinkedInProfile() {
  return (
      <div className="flex flex-col items-center justify-center w-3/4 my-5">
        <h1 className="text-3xl font-bold mb-6">How to setup linkedIn?</h1>
        <Card className="w-3/4">
          <CardHeader>
            <CardTitle>LinkedIn Profile Guide for Developers</CardTitle>
          </CardHeader>
          <CardContent>
          <section>
        <h2 className="text-2xl font-semibold mb-2">1. Profile Picture & Banner</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li><strong>Profile Picture:</strong> Professional, but not too formal. Smile, good quality, neutral background.</li>
          <li><strong>Banner:</strong> Add something related to programming – code, laptop, or your logo/nickname.</li>
        </ul>
      </section>

      <section>
      
        <h2 className="text-2xl font-semibold mb-2">🏷️ 2. Headline</h2>
        <p className="text-gray-700 mb-2">Instead of the default “Software Developer at XYZ”, write something like:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Backend Developer | Python & Django | Building Scalable APIs</li>
          <li>Frontend Developer | React, TypeScript | Pixel-perfect UI/UX</li>
        </ul>
        <p className="text-gray-700 mt-2">Add what you’re best at + your core technologies.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📝 3. About Section</h2>
        <p className="text-gray-700 mb-2">A few sentences about yourself. Ideal structure: Who you are, what you do, what excites you, your goals.</p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
          I’m a developer with 3 years of experience in Python and Django. I enjoy building backend solutions that are fast, scalable, and well thought-out. I focus on clean code, testing, and good communication. In my free time, I’m learning Go and contributing to open-source projects.
        </blockquote>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">💼 4. Experience</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Developed and maintained REST APIs using Django</li>
          <li>Integrated external systems (e.g., Stripe, AWS S3)</li>
          <li>Participated in designing microservice architecture</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🧪 5. Skills</h2>
        <p className="text-gray-700 mb-2">Add specific technologies:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Python</li>
          <li>Django</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Docker</li>
          <li>Git</li>
          <li>PostgreSQL</li>
        </ul>
        <p className="text-gray-700 mt-2">Tip: List them by importance.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🎓 6. Education</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>School/university + any courses (e.g., Udemy, bootcamps)</li>
          <li>If you’re self-taught – mention that too</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📂 7. Projects / Portfolio</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Add links to GitHub, portfolio, blog – pin them in the “Featured” section</li>
          <li>Describe your projects in the Experience section or create separate entries</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🌟 8. Recommendations / Endorsements</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Ask colleagues/friends for recommendations (you can exchange them)</li>
          <li>Collect skill endorsements</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🚀 Pro Tips</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Set profile to “Open to Work” (visible to recruiters)</li>
          <li>Use keywords recruiters search for (e.g., “React Developer”, “REST API”, “CI/CD”)</li>
          <li>Post occasionally – new projects, learning impressions, even dev memes 😄</li>
        </ul>
      </section>
          </CardContent>
        </Card>
      </div>

  );
}

export default LinkedInProfile;
