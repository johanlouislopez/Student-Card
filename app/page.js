import StudentCard from "./components/StudentCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <StudentCard name="Johan Louis A. Lopez" course="BSIT" year="2nd Year" />
    </main>
  );
}
