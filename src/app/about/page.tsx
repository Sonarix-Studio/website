import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          About Sonarix Studio
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We are dedicated to creating exceptional web experiences using
                modern technologies and best practices. Our focus is on
                performance, accessibility, and user experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Next.js 15 with App Router</li>
                <li>• React 19 with TypeScript</li>
                <li>• Modern CSS with Tailwind CSS</li>
                <li>• Component-driven architecture</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              At Sonarix Studio, we believe in building applications that not
              only look great but also perform exceptionally well. Our team
              follows industry best practices and stays up-to-date with the
              latest technologies to deliver cutting-edge solutions.
            </p>
            <p>
              We prioritize clean code, maintainability, and scalability in
              everything we build. From small websites to large-scale
              applications, we have the expertise to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
