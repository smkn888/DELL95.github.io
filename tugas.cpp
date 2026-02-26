#include <iostream>                          
#include <string>

using namespace std;

    class film{
    protected:
        string judul, genre;
        int durasi;
    public:
        film(string judul, string genre, int durasi){
            this->judul = judul;
            this->genre = genre;
            this-> durasi = durasi;
        }

        void setData(){
            cout << "masukkan judul film:";
            getline(cin, this->judul);

            cout << "masukkan judul film:";
            getline(cin, this->genre);
            
            cout << "masukkan judul film:";
            cin >> this->durasi;
        }
         void tampilkanInfo(){
            cout << "\n infornasi film \n";
            cout << "judul film:" << judul << '\n';
            cout << "genre film:" << genre << '\n';
            cout << "durasifilm:" << durasi << endl;
         }
            
    };

    int main(){
        film film1("N/A", "N/A",0);
        film1.setData();
        film1.tampilkanInfo();

        return 0;
    }
        
    //     class buku{
    // class buku {
    //     protected:
    //     string judul;
    //     string pengarang;
    //     int tahunTerbit;
    //     public:
    //     buku(string judul, string pengarang, int tahunTerbit){
    //         this->judul = judul;
    //         this->pengarang = pengarang;
    //         this->tahunTerbit = tahunTerbit;
    //     }
    //     void tampilkaninfo(){
    //         cout << "judul buku: " << judul << '\n';
    //         cout << "nama pengrang: " <<pengarang << '\n';
    //         cout << "tahunterbit: " << tahunTerbit << endl;
    //      };
    // };

    // int main(){
    // // buku buku1("atomic Habits", "james clear", 2018);
    // // buku1.tampilkaninfo();

    // return 0;
    // }