string [] penerima = {"armando", "alfa", "simson", "dahlia", "maikel",};
int [] beasiswa = {1000000, 2000000, 3000000, 4000000, 5000000};

for (int i = 0; i < penerima.Length; i++)
{
    Console.WriteLine($" daftar penerima beasiswa: {penerima[i]}, jumlah beasiswa: {beasiswa[i]}");
};

Console.WriteLine("penerima[i] = " + penerima[1] + " beasiswa[i] = " + beasiswa[1]);
