module.exports = {
  getTransformModulePath() {
    return require.resolve("@bam.tech/react-native-graphql-transformer");
  },
  getSourceExts() {
    return ["gql", "graphql"];
 }
}
