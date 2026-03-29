import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { Building2, BookOpen, FlaskConical, Wifi, UtensilsCrossed, Mic2, Monitor, Wrench } from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Conference Hall",
    desc: "We have a conference hall cum meeting room having a capacity of accommodating more than 20 members. Important meetings are conducted almost every week with the HODs and faculty members of the respective department.\n\nIt is also equipped for meeting the industry Managers to discuss important matter regarding placement and campus interviews. It is fully Wi-Fi enabled to remain connected with the outward world.",
  },
  {
    icon: Mic2,
    title: "Seminar Hall",
    desc: "NGFCET aims at providing an exceptional student experience. The institute promotes academic inclusiveness with an equal focus on all round development of the students through guest lectures by leading corporate professionals seminars and symposium. Fully air conditioned seminar hall equipped with projectors is the hub of all students activities.\n\nInteresting architecture and high end infrastructure allow students to indulge in a variety of activities in the seminar hall. The hall provides the venue for peer and industry interaction through talk shows seminars, exhibition and display. It can accommodate at least 200 students at a time.",
  },
  {
    icon: Wrench,
    title: "Workshop",
    desc: "Mechanical Engineering department occupies a wide area in the campus and the workshop is built at the rear end of the department. Sincere efforts are made by the students to create models appropriate to the topics in the curriculum. It helps the teachers to prepare samples and designs, develop and manufacture experimental equipments, from a wide range of Engineering materials for use in teaching and research.\n\nThe workshop provides hands on experience among the students of B.Tech and M.Tech course of studies. The workshop is geared towards the students with emphasis on building a small successful handy working model applying the knowledge gained in the classroom.",
  },
  {
    icon: BookOpen,
    title: "Lecture Halls",
    desc: "The college offers modern classrooms for teaching learning synergy. The huge, bright well ventilated lecture halls provide a congenial environment for the students to concentrate and fulfill their tasks as per to the requirements. There are about 30 lecture halls.\n\nThe lecture halls for MBA are well equipped with projectors and speakers for appropriate students activities.",
  },
  {
    icon: Monitor,
    title: "Language Lab",
    desc: "In today's competitive employment market, communication proficiency is valued equally if not more than the technical competence. Professionals must have the ability to organise their thoughts and ideas effectively and put them across impressively. To prepare the students to meet the challenges, NGFCET has a communication laboratory equipped with latest electronic devices.\n\nOn getting regular training in this lab, students can learn subtleties of English language and can achieve command on speaking it fluently and expressively. Experienced teachers engage the students in organised group activities like discussions, debates and quiz programmes.",
  },
  {
    icon: FlaskConical,
    title: "Labs",
    desc: "The labs and workshops are attached to the respective departments of the Engineering courses. They promote the innovative ability of the students and open the gate for research at all levels of their learning. The labs are utilised to learn pragmatically, allowing them to think differently to create new projects.\n\nThere are many interesting projects, created by the students and faculty in each department which makes the on-looker awestruck at their tasks. Altogether there are about 60 labs to promote the students creative ability.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cafeteria",
    desc: "NGFCET is housed with a vast Cafeteria that provides fresh, hygienic food at reasonable rates. The variety of food available and a friendly atmosphere make the cafeteria ideal for students to relax and interact with their peer group.\n\nIt is also wifi enabled so that students can utilize their free time to the fullest.",
  },
];

const InfrastructurePage = () => (
  <Layout>
    <SubPageLayout title="Infrastructure" subtitle="World-class facilities for holistic development">
      <div className="space-y-8">
        {facilities.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="bg-secondary border border-border rounded-2xl p-8 md:p-10 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-3">{f.title}</h3>
                  {f.desc.split("\n\n").map((p, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SubPageLayout>
  </Layout>
);

export default InfrastructurePage;
