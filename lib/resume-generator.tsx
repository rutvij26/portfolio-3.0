import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  renderToStream,
} from "@react-pdf/renderer";
import {
  experiences,
  education,
  skills,
  contactInfo,
  professionalSummary,
} from "./data";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contact: {
    fontSize: 9,
    marginBottom: 3,
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    borderBottom: "1 solid #000",
    paddingBottom: 3,
  },
  experienceItem: {
    marginBottom: 10,
  },
  role: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  company: {
    fontSize: 10,
    marginBottom: 2,
  },
  dates: {
    fontSize: 9,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 3,
  },
  educationItem: {
    marginBottom: 8,
  },
  degree: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 2,
  },
  institution: {
    fontSize: 10,
    marginBottom: 2,
  },
  skillsList: {
    fontSize: 10,
    marginBottom: 3,
  },
});

export async function generateResumePDF(): Promise<Buffer> {
  const ResumeDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Rutvij Sathe</Text>
          <Text style={styles.contact}>{contactInfo.email}</Text>
          <Text style={styles.contact}>{contactInfo.location}</Text>
          <Text style={styles.contact}>
            {contactInfo.linkedin} | {contactInfo.github} |{" "}
            {contactInfo.portfolio}
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
          <Text style={{ fontSize: 10 }}>{professionalSummary}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>
          {experiences.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.role}>
                {exp.role}{" "}
                {exp.employmentType !== "Full Time"
                  ? `[${exp.employmentType}]`
                  : ""}
              </Text>
              <Text style={styles.company}>
                {exp.company} | {exp.location}
              </Text>
              <Text style={styles.dates}>
                {exp.startDate} – {exp.endDate}
              </Text>
              {exp.bullets.map((bullet, bulletIndex) => (
                <Text key={bulletIndex} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.institution}>
                {edu.institution} | {edu.location || ""}
              </Text>
              <Text style={styles.dates}>
                {edu.startDate} – {edu.endDate}
              </Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TECHNOLOGIES AND LANGUAGES</Text>
          {Object.entries(
            skills.reduce((acc, skill) => {
              if (!acc[skill.category]) acc[skill.category] = [];
              acc[skill.category].push(skill.name);
              return acc;
            }, {} as Record<string, string[]>)
          ).map(([category, skillNames], index) => (
            <Text key={index} style={styles.skillsList}>
              <Text style={{ fontWeight: "bold" }}>{category}:</Text>{" "}
              {skillNames.join(", ")}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  const stream = await renderToStream(ResumeDocument);
  const chunks: Uint8Array[] = [];

  for await (const chunk of stream as any) {
    chunks.push(chunk);
  }

  const pdfBuffer = Buffer.concat(chunks);
  return pdfBuffer;
}
