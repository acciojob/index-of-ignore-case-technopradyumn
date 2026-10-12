function indexOfIgnoreCase(s1, s2) {
  return s1.toLowerCase().indexOf(s2.toLowerCase());
}

document.getElementById("findBtn").addEventListener("click", function () {
  const s1 = document.getElementById("s1").value;
  const s2 = document.getElementById("s2").value;
  document.getElementById("result").textContent = indexOfIgnoreCase(s1, s2);
});
