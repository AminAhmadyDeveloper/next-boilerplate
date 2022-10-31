import Head from "next/head";
import Image from "next/image";
import { Prism } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "@styles/Home.module.css";
import useCounter from "@hooks/useCounter";
import useIndex from "@hooks/useIndex";
import FormikFormSample from "components/FormikFormSample";
import useFormikFormSample from "@hooks/useFormikFormSample";
import { LODASH_CODE_EXAMPLE, LODASH_CODE_EXAMPLE_BOX } from "@constants/CApp";

export default function Home() {
  const { count, increase } = useCounter();
  const { reactQueryCardText } = useIndex();
  const formikFormSampleHook = useFormikFormSample();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

          <h1 className={styles.myTitle}>
            Packages <a href="http://aminahmadydeveloper.github.io/">Added</a>
          </h1>

          <p className={styles.description}>
            Packages used are:{" "}
            <code className={styles.code}>
              Axios, React Query, Redux/Toolkit, Formik/Yup, React Syntax
              Highlighter
            </code>
          </p>

          <span onClick={increase} className={styles.myCard}>
            <h2>Redux | {count} &rarr;</h2>
            <p>
              Tap on button to increase count on Redux state, it includes
              Redux/Toolkit and custom hook to control it. MAX IS : 99
            </p>
          </span>

          <a
            href="https://tanstack.com/query/v4/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.myCard}
          >
            <h2>Axios + Query &rarr;</h2>
            <p>{reactQueryCardText}...</p>
          </a>

          <div className={styles.myCard}>
            <h2>Formik + Yup &rarr;</h2>
            <p>
              This is form made with Formik and Connected to Yup for validation
              using validation schema, Form never been this easy before!
            </p>
            <FormikFormSample
              onSubmit={(values) => formikFormSampleHook.setFormValues(values)}
              formHook={formikFormSampleHook}
            />
          </div>

          <a
            href="https://lodash.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.myCard}
          >
            <h2>Lodash + RSH &rarr;</h2>
            <p>
              Lodash is a JavaScript library which provides utility functions
              for common programming tasks using the functional programming
            </p>
            <Prism
              language="typescript"
              style={darcula}
              customStyle={LODASH_CODE_EXAMPLE_BOX}
            >
              {LODASH_CODE_EXAMPLE}
            </Prism>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              style={{ marginRight: 8 }}
            />
          </span>
          & Developed by Amin Ahmady
        </a>
      </footer>
    </div>
  );
}
