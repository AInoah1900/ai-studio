// 简单测试 libsql 是否已正确加载
try {
  const libsql = require('libsql');
  console.log('libsql 加载成功!');
  console.log('版本:', libsql.version);
  console.log('libsql 接口:', Object.keys(libsql));
  
  // 检查 @libsql/darwin-x64 是否存在
  try {
    const x64 = require('@libsql/darwin-x64');
    console.log('@libsql/darwin-x64 加载成功!');
    console.log('@libsql/darwin-x64 接口:', Object.keys(x64));
  } catch (err) {
    console.error('@libsql/darwin-x64 加载失败:', err);
  }
  
  // 检查 @libsql/darwin-arm64 是否存在
  try {
    const arm64 = require('@libsql/darwin-arm64');
    console.log('@libsql/darwin-arm64 加载成功!');
    console.log('@libsql/darwin-arm64 接口:', Object.keys(arm64));
  } catch (err) {
    console.error('@libsql/darwin-arm64 加载失败:', err);
  }
  
} catch (err) {
  console.error('libsql 加载失败:', err);
} 