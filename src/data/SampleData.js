// src/data/sampleData.js
const sampleData = {
    benchmarks: [
      {
        id: "1",
        project: "tinyxml2",
        signature: "output-tinyxml2-_zn8tinyxml210xmlelement12setattributeepkcs2_",
        status: "Running",
        buildRate: 0.00,
        crashRate: 0.00,
        bugs: 0,
        coverage: 0.00,
        duration: "0:38:49",
        startTime: "2025-03-13 11:29:12",
        endTime: "2025-03-13 12:08:02",
        logs: "2025-03-04 22:05:05 [Trial 10] INFO [logger.info]: ------ ROUND #0 Received conclusion ------\n2025-03-04 22:05:05 [Trial 10] INFO [logger.info]: Compile fuzzer target with modified build script...\n2025-03-04 22:05:05 [Trial 10] INFO [logger.info]: SNB:/experiment/src/fuzz_checkpoint/sll use local cached copies of /PROJECT_18_NAME/ dir:/sbin/fuzz/PROJECT_18_NAME/",
        branchCoverage: "N/A",
        functionCoverage: "N/A"
      },
      {
        id: "2",
        project: "tinyxml2",
        signature: "output-tinyxml2-_zn8tinyxml210xmlelement21findorcreateattributeepkc",
        status: "Running",
        buildRate: 0.00,
        crashRate: 0.00,
        bugs: 0,
        coverage: 0.00,
        duration: "0:38:49",
        startTime: "2025-03-13 11:29:12",
        endTime: "2025-03-13 12:08:02"
      },
      {
        id: "3",
        project: "tinyxml2",
        signature: "output-tinyxml2-_zn8tinyxml210xmlelement9parsedeepepcpns_7strpairepi",
        status: "Running",
        buildRate: 0.00,
        crashRate: 0.00,
        bugs: 0,
        coverage: 0.00,
        duration: "0:38:49",
        startTime: "2025-03-13 11:29:12",
        endTime: "2025-03-13 12:08:02"
      },
      {
        id: "4",
        project: "tinyxml2",
        signature: "output-tinyxml2-_zn8tinyxml210xmlprinter10visitentererkns_10xmlelementepkns_12xmlattributee",
        status: "Running",
        buildRate: 0.00,
        crashRate: 0.00,
        bugs: 0,
        coverage: 0.00,
        duration: "0:38:49",
        startTime: "2025-03-13 11:29:12",
        endTime: "2025-03-13 12:08:02"
      },
      {
        id: "5",
        project: "tinyxml2",
        signature: "output-tinyxml2-_znk8tinyxml210xmlelement12shallowcloneepns_11xmldocumente",
        status: "Running",
        buildRate: 0.00,
        crashRate: 0.00,
        bugs: 0,
        coverage: 0.00,
        duration: "0:38:49",
        startTime: "2025-03-13 11:29:12",
        endTime: "2025-03-13 12:08:02"
      }
    ],
    projectSummary: [
      {
        project: "tinyxml2",
        totalBenchmarks: 5,
        successfulBenchmarks: 0,
        coverageGain: 0.00,
        totalCoverageGain: 0.00,
        totalCoveredLines: 0,
        newCoveredLines: 0,
        existingCoveredLines: 0,
        totalProjectLines: 0,
        initialCoverage: 45.2
      }
    ],
    coverageGains: [
      {
        project: "tinyxml2",
        totalLines: 5423,
        coveredLines: 2453,
        coveragePercent: 45.2
      }
    ],
    testCaseResults: [
      { name: "Passed", value: 65 },
      { name: "Failed", value: 8 },
      { name: "Error", value: 12 },
      { name: "Cancelled", value: 15 }
    ],
    runTimeline: [
      { date: "10 Jun", pass: 5, fail: 2, error: 0, cancelled: 0 },
      { date: "11 Jun", pass: 7, fail: 5, error: 1, cancelled: 0 },
      { date: "12 Jun", pass: 6, fail: 15, error: 2, cancelled: 0 },
      { date: "13 Jun", pass: 4, fail: 8, error: 3, cancelled: 1 },
      { date: "14 Jun", pass: 5, fail: 3, error: 2, cancelled: 2 },
      { date: "15 Jun", pass: 7, fail: 4, error: 3, cancelled: 1 },
      { date: "16 Jun", pass: 8, fail: 10, error: 5, cancelled: 2 },
      { date: "17 Jun", pass: 10, fail: 18, error: 4, cancelled: 1 }
    ],
    averageCoverage: 45.2,
    experimentDuration: "0:38:49",
    experimentStartTime: "2025-03-13 11:29:12",
    experimentEndTime: "2025-03-13 12:08:02"
  };
  
  export default sampleData;